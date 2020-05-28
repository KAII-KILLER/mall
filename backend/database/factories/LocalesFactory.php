<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Local;
use Faker\Generator as Faker;

$factory->define(Local::class, function (Faker $faker) {
    return [
        'nombre' => $faker->name,
        'info' => $faker->text($maxNbChars = 200),
    ];
});
