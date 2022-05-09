const tpl = require('../../lib/tpl')
const ret = tpl.success()
ret.data = [{
    title: '园所管理',
    name: 'gardenManage',
    menu_id: 1,
    children: [{
        title: '考核管理',
        name: 'Assessment',
        menu_id: 2,
        children: [{
            title: '园所考核',
            name: 'gardenAssessment',
            menu_id: 3
        }, {
            title: '员工考核',
            menu_id: 4,
            name: 'staffAssessment'
        }]
    }, {
        title: '特长管理',
        name: 'Speciality',
        menu_id: 5,
        children: [{
            title: '管理',
            name: 'specialityAdmin',
            menu_id: 6
        }, {
            title: '统计',
            menu_id: 7,
            name: 'specialityCount'
        }]
    }, {
        title: '学生管理',
        name: 'Speciality',
        menu_id: 8,
        children: [{
            title: '学生档案',
            name: 'specialityAdmin',
            menu_id: 9
        }, {
            title: '目标生源',
            menu_id: 10,
            name: 'specialityCount'
        }]
    }, {
        title: '人事管理',
        name: 'Speciality',
        menu_id: 11,
        children: [{
            title: '人事考核',
            name: 'specialityAdmin',
            menu_id: 12,
            children: [{
                title: '考勤',
                menu_id: 13,
                name: 'specialityCount'
            }, {
                title: '成长',
                menu_id: 14,
                name: 'specialityCount'
            }, {
                title: '离职',
                menu_id: 15,
                name: 'specialityCount'
            }, {
                title: '晋升',
                menu_id: 16,
                name: 'specialityCount'
            }, {
                title: '在职',
                menu_id: 17,
                name: 'specialityCount'
            }, {
                title: '骨干生成率',
                menu_id: 18,
                name: 'specialityCount'
            }]
        }, {
            title: '员工信息',
            menu_id: 19,
            name: 'specialityCount'
        }, {
            title: '招聘统计',
            menu_id: 20,
            name: 'specialityCount'
        }]
    }, {
        title: '保教管理',
        menu_id: 21,
        name: 'specialityCount',
        children: [{
            title: '幼儿考勤记录',
            menu_id: 22,
            name: 'specialityCount'
        },
        {
            title: '成长档案',
            menu_id: 23,
            name: 'specialityCount'
        },
        {
            title: '教育教学',
            menu_id: 24,
            name: 'specialityCount'
        },
        {
            title: '督导日志',
            menu_id: 25,
            name: 'specialityCount'
        },
        {
            title: '考核报表',
            menu_id: 26,
            name: 'specialityCount'
        },
        {
            title: '园长日志',
            menu_id: 27,
            name: 'specialityCount'
        },
        {
            title: '工作日志',
            menu_id: 28,
            name: 'specialityCount'
        }
        ]
    }]
}]
module.exports = ret;
