@extends('guest.layouts.app')
@section('content')
    <div id="reactRouter"></div>
@endsection
@push('meta')
    <meta name="auth" content="{{ Auth::check() }}">
    <meta name="map" content="{{ Request::path() }}">
    <meta name="routeApi" content='@json($routesApi)'>
@endpush
@push('css')
@endpush
@push('scripts')
    <script type="text/javascript" src="{{ mix('js/pages/GlobalRouter.js') }}"></script>
@endpush
