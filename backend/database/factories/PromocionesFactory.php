<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Promociones;
use Faker\Generator as Faker;

$factory->define(Promociones::class, function (Faker $faker) {
    return [
        'nombre' => $faker->name,
        'info' => $faker->text($maxNbChars = 200),
        'valor' => $faker->numberBetween($min = 1, $max = 100),
        'qr' => $faker->text($maxNbChars = 200),
        'local_id' => $faker->randomDigitNotNull,
    ];
});
