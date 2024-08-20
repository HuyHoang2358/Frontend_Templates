@extends('layouts.master')

@section('title')
    @lang('translation.yajra-datatable')
@endsection

@section('css')
    <!--datatable css-->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/dataTables.bootstrap5.min.css" />
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.2.2/css/buttons.dataTables.min.css">
@endsection

@section('content')
    @component('components.breadcrumb')
        @slot('li_1')
            Backend
        @endslot
        @slot('title')
            Yajra Datatable
        @endslot
    @endcomponent

    <table class="table table-bordered yajra-datatable">
        <thead>
            <tr>
                <th>No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Rating</th>
                <th>Balance</th>
                <th>Joining Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
@endsection
@section('script')
    <script src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.1/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript">
        $(function() {

            var table = $('.yajra-datatable').DataTable({
                processing: true,
                serverSide: true,
                ajax: "{{ route('customers.list') }}",
                columns: [{
                        data: 'DT_RowIndex',
                        name: 'No',
                        searchable: false
                    },
                    {
                        data: 'username',
                        name: 'username',
                    },
                    {
                        data: 'email',
                        name: 'email',
                    },
                    {
                        data: 'phone',
                        name: 'phone',
                    },
                    {
                        data: 'address',
                        name: 'address',
                    },
                    {
                        data: 'rating',
                        name: 'rating',
                    },
                    {
                        data: 'balance',
                        name: 'balance'
                    },
                    {
                        data: 'joining_date',
                        name: 'joining_date'
                    },
                    {
                        data: 'action',
                        name: 'action',
                    },
                ]
            });

        });
    </script>
@endsection
