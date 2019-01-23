// import commonAPI from '@/api/index.js';

const formOptionsProcess = function (enumsMap) {
    let keys = Object.keys(enumsMap);
    let res = {};
    keys.forEach(function (key) {
        res[key] = enumsMap[key].map(function (item) {
            return {
                label: item.label,
                value: item.code
            };
        });
    });
    return res;
};
const formConfigProcess = function (group) {
    let typeArr = ['input', 'checkbox', 'select', 'radio'];
    let res = group.map(function (groupItem) {
        return {
            name: groupItem.name,
            title: groupItem.title,
            formItems: groupItem.items.map(function (item) {
                return {
                    type: typeArr[item.formType],
                    name: item.title,
                    code: item.name,
                    optionCode: item.enumsCode
                };
            })
        };
    });
    return res;
};
const formDataProcess = function (group) {
    let res = {};
    group.forEach(function (groupItem) {
        groupItem.items.forEach(function (item) {
            res[item.name] = '';
        });
    });
    return res;
};

export default {
    getFormConfigData: function () {
        return new Promise((resolve) => {
            let d = require('./data.json').data;
            let formOptions = Object.freeze(formOptionsProcess(d.enumsMap));
            let formConfig = Object.freeze(formConfigProcess(d.groupDtos));
            let formData = formDataProcess(d.groupDtos);
            resolve({
                formOptions,
                formConfig,
                formData
            });
        });
    }
};
