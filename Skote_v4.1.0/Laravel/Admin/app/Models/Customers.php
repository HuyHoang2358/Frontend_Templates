<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    use HasFactory;

    protected $table = "customers";

    protected $fillable = [
        "username",
        "email",
        "phone",
        "address",
        "rating",
        "balance",
        "joining_date"
    ];
}
