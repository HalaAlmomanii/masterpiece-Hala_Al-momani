<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('status')->default('pending');
            $table->string('title');
            $table->date('Date');
            $table->time('time');
            $table->integer('price');
            $table->text('description');
            $table->string('location');
            $table->string('photo');
            $table->integer('numberofticket');
            $table->integer('numberofbooking')->default(0);
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->unsignedBigInteger('company_id');
            $table->foreign('company_id')->references('id')->on('writers')->onDelete('cascade');

          
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
