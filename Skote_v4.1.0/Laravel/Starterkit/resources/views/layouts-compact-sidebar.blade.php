@extends('layouts.master')

@section('title') @lang('translation.Compact_Sidebar') @endsection

@section('body')

<body data-sidebar="dark" data-sidebar-size="small">
    @endsection

    @section('content')

    @component('components.breadcrumb')
    @slot('li_1') Layouts @endslot
    @slot('title') Compact Sidebar @endslot
    @endcomponent


    @endsection
    @section('script')

    <!-- dashboard init -->
    <script src="{{ URL::asset('build/js/pages/dashboard.init.js') }}"></script>
    @endsection