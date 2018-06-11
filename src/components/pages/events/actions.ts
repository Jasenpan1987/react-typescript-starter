import { baseAction } from "Store";
import { IEvent } from "./model";

const LOAD_EVENTS_PENDING = "LOAD_EVENTS_PENDING";
const LOAD_EVENTS_SUCCESS = "LOAD_EVENTS_SUCCESS";
const LOAD_EVENTS_FAILED = "LOAD_EVENTS_FAILED";

const loadEventsSuccess = (events: )