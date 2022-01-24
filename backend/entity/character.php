<?php

Class LARPG_CHARACTER {

    public static function register() {
        register_post_type( 'character', [
            'label'  => 'Персонаж',
            'labels' => [
                'name'               => 'character', // основное название для типа записи
                'singular_name'      => 'character', // название для одной записи этого типа
                'add_new'            => 'Добавить персонажа', // для добавления новой записи
                'add_new_item'       => 'Добавление персонажа', // заголовка у вновь создаваемой записи в админ-панели.
                'edit_item'          => 'Редактирование персонажа', // для редактирования типа записи
                'new_item'           => 'Новый персонаж', // текст новой записи
                'view_item'          => 'Смотреть персонажа', // для просмотра записи этого типа.
                'search_items'       => 'Искать персонажа', // для поиска по этим типам записи
                'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
                'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
                'parent_item_colon'  => '', // для родителей (у древовидных типов)
                'menu_name'          => 'Персонажи', // название меню
            ],
            'description'         => 'Одна из основных сущностей платформы - персонаж',
            'public'              => true,
            'publicly_queryable'  => true, // зависит от public
            'exclude_from_search' => false, // зависит от public
            'show_ui'             => true, // зависит от public
            'show_in_nav_menus'   => true, // зависит от public
            'show_in_menu'        => true, // показывать ли в меню адмнки
            'show_in_admin_bar'   => true, // зависит от show_in_menu
            'show_in_rest'        => false, // добавить в REST API. C WP 4.7
            'rest_base'           => false, // $post_type. C WP 4.7
            'menu_position'       => 70,
            'menu_icon'           => 'universal access',
            'capability_type'     => 'character',
            //'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
            //'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
            'hierarchical'        => false,
            'supports'            => [ 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'custom-fields', 'comments', 'revisions'], // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
            'taxonomies'          => [],
            'has_archive'         => true,
            'rewrite'             => true,
            'query_var'           => true,
        ] );
    }

    static $required_fields = [
        'post_title'
    ];

    static $charcter_model = [
        'sex' => [
            'name'       => 'sex',
            'value_type' => 'string'
        ],
        'rpg_class' => [
            'name'       => 'rpg_class',
            'value_type' => 'string'
        ]
    ];

    public static function add( $data ) {

        foreach ( LARPG_CHARACTER::$required_fields as $required_field ) {
            if ( !$data[$required_field] ) {
                return 'error';
            }
        }

        $post_id = wp_insert_post($data);
        if ( is_wp_error($post_id) ) {

        } else {
            foreach ( LARPG_CHARACTER::$charcter_model as $additional_field ) {
                if ( $data[$additional_field['name']] ) {
                    update_post_meta($post_id, $additional_field['name'], $data[$additional_field['name']] );
                }
            }
        }

    }

}

add_action( 'init', ['LARPG_CHARACTER', 'register'] );