<?php

Class GAME_SETTINGS__PAGE {

    /** TODO: Change page icon **/

    public static function register(){
        add_menu_page(
            'Игра',
            'Игра',
            'manage_options',
            'larp',
            ['GAME_SETTINGS__PAGE', 'render'],
            'dashicons-superhero',
            61 );
    }

    public static function render() {
        return '';
    }

}



add_action( 'admin_menu', ['GAME_SETTINGS__PAGE', 'register'] );