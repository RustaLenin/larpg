<?php

Class THEME_SETTINGS__PAGE {

    public static function register(){
        add_menu_page(
            'Настройки темы',
            'Настройки темы',
            'manage_options',
            'theme_settings',
            ['THEME_SETTINGS__PAGE', 'render'],
            'dashicons-admin-customizer',
            61 );
    }

    public static function render() { ?>

        <script type="module" src="<?php echo get_template_directory_uri(); ?>/frontend/uikit/uikit.js"></script>
        <nice-settings></nice-settings>
        <?php
    }

}



add_action( 'admin_menu', ['THEME_SETTINGS__PAGE', 'register'] );