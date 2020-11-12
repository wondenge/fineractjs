

import ApiClient from '../ApiClient';

/**
 * The Event model module.
 * @module model/Event
 * @version 1.0
 */
class Event {
    /**
     * Constructs a new <code>Event</code>.
     * @alias module:model/Event
     */
    constructor() { 
        
        Event.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Event} obj Optional instance to populate.
     * @return {module:model/Event} The populated <code>Event</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Event();

            if (data.hasOwnProperty('actionName')) {
                obj['actionName'] = ApiClient.convertToType(data['actionName'], 'String');
            }
            if (data.hasOwnProperty('entityName')) {
                obj['entityName'] = ApiClient.convertToType(data['entityName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} actionName
 */
Event.prototype['actionName'] = undefined;

/**
 * @member {String} entityName
 */
Event.prototype['entityName'] = undefined;






export default Event;

