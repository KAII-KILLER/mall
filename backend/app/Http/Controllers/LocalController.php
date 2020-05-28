<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Local;

class LocalController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $local = Local::all();
        return response()->json($local->load('promociones'), 200);
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
        //
    }

    /**
     * Display the specified resource.
     */
    
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */

    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */

    public function destroy($id)
    {
        //
    }
}
