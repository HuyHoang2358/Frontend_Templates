@extends('layouts.master-layouts')

@section('title') @lang('translation.Colored_Header') @endsection

@section('body')
    <body data-topbar="colored" data-layout="horizontal">
@endsection

@section('content')

    @component('components.breadcrumb')
        @slot('li_1') Layouts @endslot
        @slot('title') Colored Header @endslot
    @endcomponent


@endsection
@section('script')

    <!-- dashboard init -->
    <script src="{{ URL::asset('build/js/pages/dashboard.init.js') }}"></script>
@endsection

