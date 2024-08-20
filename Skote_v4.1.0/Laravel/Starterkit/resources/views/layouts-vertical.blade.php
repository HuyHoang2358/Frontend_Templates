@extends('layouts.master')

@section('title') @lang('translation.Vertical') @endsection

@section('body')
    <body data-sidebar="dark">
@endsection

@section('content')

    @component('components.breadcrumb')
        @slot('li_1') Layouts @endslot
        @slot('title') Vertical @endslot
    @endcomponent
    
    

@endsection
@section('script')

    <!-- dashboard init -->
    <script src="{{ URL::asset('build/js/pages/dashboard.init.js') }}"></script>
@endsection
