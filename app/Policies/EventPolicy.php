<?php

namespace App\Policies;

use App\Models\Event;
use App\Models\MeetupGroup;
use App\Models\User;

class EventPolicy
{
    public function update(User $user, Event $event): bool
    {
        return $user->id === $event->meetupGroup->user_id;
    }
}
 