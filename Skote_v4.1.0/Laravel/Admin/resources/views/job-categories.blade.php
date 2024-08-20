@extends('layouts.master')

@section('title') @lang('translation.Jobs_Categories') @endsection

@section('content')

@component('components.breadcrumb')
@slot('li_1') Jobs @endslot
@slot('title') Job Categories @endslot
@endcomponent

<div class="row justify-content-center text-center">
    <div class="col-xl-4">
        <div class="mb-4">
            <h4>Browse Job By Categories</h4>
            <p class="text-muted">Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-xl-3 col-md-6">
        <div class="card jobs-categories">
            <div class="card-body">
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Accounting & Finance <span class="badge text-bg-info float-end bg-opacity-100">52</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Development <span class="badge text-bg-info float-end bg-opacity-100">10</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Customer Service <span class="badge text-bg-info float-end bg-opacity-100">64</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Marketing <span class="badge text-bg-info float-end bg-opacity-100">105</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Human Resource <span class="badge text-bg-info float-end bg-opacity-100">142</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Health and Care <span class="badge text-bg-info float-end bg-opacity-100">01</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Project Management<span class="badge text-bg-info float-end bg-opacity-100">254</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block">Automotive Jobs <span class="badge text-bg-info float-end bg-opacity-100">79</span></a>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="card jobs-categories">
            <div class="card-body">
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Accounting & Finance <span class="badge text-bg-info float-end bg-opacity-100">85</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Development <span class="badge text-bg-info float-end bg-opacity-100">19</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Customer Service <span class="badge text-bg-info float-end bg-opacity-100">48</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Marketing <span class="badge text-bg-info float-end bg-opacity-100">34</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Human Resource <span class="badge text-bg-info float-end bg-opacity-100">33</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Health and Care <span class="badge text-bg-info float-end bg-opacity-100">748</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Project Management<span class="badge text-bg-info float-end bg-opacity-100">16</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block">Automotive Jobs <span class="badge text-bg-info float-end bg-opacity-100">94</span></a>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="card jobs-categories">
            <div class="card-body">
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Accounting & Finance <span class="badge text-bg-info float-end bg-opacity-100">17</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Development <span class="badge text-bg-info float-end bg-opacity-100">64</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Customer Service <span class="badge text-bg-info float-end bg-opacity-100">72</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Marketing <span class="badge text-bg-info float-end bg-opacity-100">19</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Human Resource <span class="badge text-bg-info float-end bg-opacity-100">305</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Health and Care <span class="badge text-bg-info float-end bg-opacity-100">64</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Project Management<span class="badge text-bg-info float-end bg-opacity-100">112</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block">Automotive Jobs <span class="badge text-bg-info float-end bg-opacity-100">31</span></a>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="card jobs-categories">
            <div class="card-body">
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Accounting & Finance <span class="badge text-bg-info float-end bg-opacity-100">85</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Development <span class="badge text-bg-info float-end bg-opacity-100">19</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Customer Service <span class="badge text-bg-info float-end bg-opacity-100">48</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Marketing <span class="badge text-bg-info float-end bg-opacity-100">34</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Human Resource <span class="badge text-bg-info float-end bg-opacity-100">33</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Health and Care <span class="badge text-bg-info float-end bg-opacity-100">748</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Project Management<span class="badge text-bg-info float-end bg-opacity-100">16</span></a>
                <a href="#!" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block">Automotive Jobs <span class="badge text-bg-info float-end bg-opacity-100">94</span></a>
            </div>
        </div>
    </div>
</div>

@endsection
@section('script')
<script src="{{URL::asset('build/js/app.js')}}"></script>
@endsection
