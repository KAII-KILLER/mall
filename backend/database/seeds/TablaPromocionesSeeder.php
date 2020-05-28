<?php

use Illuminate\Database\Seeder;

class TablaPromocionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @return void
     */

    public function run()
    {
        DB::table('promociones')->insert([
            [
                'nombre'=> 'Promcion1',
                'info' => '12% hamburguesas',
                'valor' => '12', //podría generar error, de ser así quitar comillas
                'qr' => 'Este es un código QR',
                'local_id' => 3,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
            ] , [
                'nombre'=> 'Promcion1',
                'info' => '12% hamburguesas',
                'valor' => '12', //podría generar error, de ser así quitar comillas
                'qr' => 'Este es un código QR',
                'local_id' => 3,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
            ] , [
                'nombre'=> 'Promcion1',
                'info' => '12% hamburguesas',
                'valor' => '12', //podría generar error, de ser así quitar comillas
                'qr' => 'Este es un código QR',
                'local_id' => 3,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
            ]
        ]);
    }
}
