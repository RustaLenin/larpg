export let settings_model = {
    'title': 'Settings Title',
    'menu': {
        'collapse_able': true,
        'is_collapsed': false,
        'list': {
            'main': {
                'name': 'main',
                'label': 'Main settings',
                'icon': 'cog',
                'active': true,
                'order': 0,
            },
            'secondary': {
                'name': 'secondary',
                'label': 'Secondary settings',
                'icon': false,
                'active': false,
                'order': 1,
            }
        }
    },
    'content': {
        'tabs': {
            'main': {
                'content': `<div>123</div>`,
                'active': true
            },
            'secondary': {
                'content': () => { return `<span>456</span>`},
                'active': false
            }
        }
    }
}