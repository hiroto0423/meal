<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index () {
        return response()->json(['apple' => 'red', 'peach' => 'pink']);
    }
    
    public function mealpost () {
        return response()->json();
    }
}
