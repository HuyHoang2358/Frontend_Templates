@extends('layouts.master')

@section('title') @lang('translation.Colored_Sidebar') @endsection

@section('body')
    <body data-sidebar="colored">
@endsection

@section('content')

    @component('components.breadcrumb')
        @slot('li_1') Layouts @endslot
        @slot('title') Colored Sidebar @endslot
    @endcomponent
        


@endsection
@section('script')

    <!-- dashboard init -->
    <script src="{{ URL::asset('build/js/pages/dashboard.init.js') }}"></script>
@endsection

