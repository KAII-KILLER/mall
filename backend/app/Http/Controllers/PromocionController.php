<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Promociones;
use App\Local;
use QrCode;

class PromocionController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $promociones = Promociones::all();
        return response()->json($promociones, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        $local = Local::find($request->local_id);
        
        $promocion = new Promocion();
        $promocion->nombre = $request->nombre;
        $promocion->info = $request->info;
        $promocion->valor = $request->valor;
        $promocion->qr = $request->qr;
        $promocion->local_id = $request->local_id;
        $promocion->save();

        return response()->json($promocion, 201);
    }

    /**
     * Display the specified resource.
     * @param  int  $id
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     * @param  int  $id
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     */
    public function update()
    {
        $qr = QrCode::format('png')->size(400)->generate("www.777.com.ec");
        $image = \base64_encode($qr);
        $promocion = Promociones::find(3);
        $promocion->qr = $image;
        $promocion->save();
        return view('qr', compact('image'));
    }

    /**
     * Remove the specified resource from storage.
     * @param  int  $id
     */
    public function destroy($id)
    {
        //
    }
}
