@extends('layouts.master')

@section('container')

	<h1>Create posting</h1>

	<hr>

	<form method="post" action="{{ route('postings.store') }}" autocomplete="off">

		@csrf

		@include('postings._form')

		<div class="d-flex flex-row">
			<button type="submit" class="btn btn-primary me-2">
				<i class="fa fa-check"></i> Save
			</button>
			<a class="btn btn-outline-primary" href="{{ route('postings.index') }}">
				<i class="fa fa-times"></i> Cancel
			</a>
		</div>

	</form>

@endsection
