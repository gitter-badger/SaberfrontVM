<?php

namespace Saberfront\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class LogLastUserActivity
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
  if(Auth::check()) {
    $expiresAt = Carbon::now()->addMinutes(5);
    Cache::put('user-is-online-' . Auth::user()->id, $expiresAt);
}
return $next($request);

    }
}
