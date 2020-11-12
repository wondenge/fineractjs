

import ApiClient from '../ApiClient';
import PostHolidaysRequestOffices from './PostHolidaysRequestOffices';

/**
 * The PostHolidaysRequest model module.
 * @module model/PostHolidaysRequest
 * @version 1.0
 */
class PostHolidaysRequest {
    /**
     * Constructs a new <code>PostHolidaysRequest</code>.
     * PostHolidaysRequest
     * @alias module:model/PostHolidaysRequest
     */
    constructor() { 
        
        PostHolidaysRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostHolidaysRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostHolidaysRequest} obj Optional instance to populate.
     * @return {module:model/PostHolidaysRequest} The populated <code>PostHolidaysRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostHolidaysRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'Date');
            }
            if (data.hasOwnProperty('toDate')) {
                obj['toDate'] = ApiClient.convertToType(data['toDate'], 'Date');
            }
            if (data.hasOwnProperty('repaymentsRescheduledTo')) {
                obj['repaymentsRescheduledTo'] = ApiClient.convertToType(data['repaymentsRescheduledTo'], 'Date');
            }
            if (data.hasOwnProperty('offices')) {
                obj['offices'] = ApiClient.convertToType(data['offices'], [PostHolidaysRequestOffices]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostHolidaysRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PostHolidaysRequest.prototype['description'] = undefined;

/**
 * @member {String} dateFormat
 */
PostHolidaysRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostHolidaysRequest.prototype['locale'] = undefined;

/**
 * @member {Date} fromDate
 */
PostHolidaysRequest.prototype['fromDate'] = undefined;

/**
 * @member {Date} toDate
 */
PostHolidaysRequest.prototype['toDate'] = undefined;

/**
 * @member {Date} repaymentsRescheduledTo
 */
PostHolidaysRequest.prototype['repaymentsRescheduledTo'] = undefined;

/**
 * @member {Array.<module:model/PostHolidaysRequestOffices>} offices
 */
PostHolidaysRequest.prototype['offices'] = undefined;






export default PostHolidaysRequest;

