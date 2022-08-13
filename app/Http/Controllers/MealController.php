<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meal;

class MealController extends Controller
{
    public function mealpost (Request $repuest, Meal $meal) {
        $input = $repuest;
        $meal->name =fill($input);
        $meal->save();
        return response()->json($meal);
        //return response()->json($repuest);
    }
}
