

import ApiClient from '../ApiClient';

/**
 * The PostHolidaysRequestOffices model module.
 * @module model/PostHolidaysRequestOffices
 * @version 1.0
 */
class PostHolidaysRequestOffices {
    /**
     * Constructs a new <code>PostHolidaysRequestOffices</code>.
     * @alias module:model/PostHolidaysRequestOffices
     */
    constructor() { 
        
        PostHolidaysRequestOffices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostHolidaysRequestOffices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostHolidaysRequestOffices} obj Optional instance to populate.
     * @return {module:model/PostHolidaysRequestOffices} The populated <code>PostHolidaysRequestOffices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostHolidaysRequestOffices();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostHolidaysRequestOffices.prototype['officeId'] = undefined;






export default PostHolidaysRequestOffices;

