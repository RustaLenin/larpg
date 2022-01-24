<?php
get_header(); ?>

<script type="module" src="<?php echo get_template_directory_uri(); ?>/frontend/app/app.js"></script>
<!--<div id='app'></div>-->

<?php

$data = [
    'title'       => 'Гаррош Адский Крик',
    'sex'         => 'Мускулинный орк муж',
    'rpg_class'   => 'Мастер клинка'
];

$charcter_model = [
    'sex' => [
        'name'       => 'sex',
        'value_type' => 'string'
    ],
    'rpg_class' => [
        'name'       => 'rpg_class',
        'value_type' => 'string'
    ]
];

foreach ( $charcter_model as $additional_field ) {
    if ( $data[$additional_field['name']] ) {
        var_dump($data[$additional_field['name']]);
    }
}

?>

<?php
get_footer();