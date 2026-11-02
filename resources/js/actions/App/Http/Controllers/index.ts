import EventController from './EventController'
import RsvpController from './RsvpController'
import Settings from './Settings'
const Controllers = {
    EventController: Object.assign(EventController, EventController),
RsvpController: Object.assign(RsvpController, RsvpController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers