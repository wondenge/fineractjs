

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The GetHolidaysResponse model module.
 * @module model/GetHolidaysResponse
 * @version 1.0
 */
class GetHolidaysResponse {
    /**
     * Constructs a new <code>GetHolidaysResponse</code>.
     * GetHolidaysResponse
     * @alias module:model/GetHolidaysResponse
     */
    constructor() { 
        
        GetHolidaysResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetHolidaysResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHolidaysResponse} obj Optional instance to populate.
     * @return {module:model/GetHolidaysResponse} The populated <code>GetHolidaysResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetHolidaysResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = EnumOptionData.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetHolidaysResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetHolidaysResponse.prototype['name'] = undefined;

/**
 * @member {Date} fromDate
 */
GetHolidaysResponse.prototype['fromDate'] = undefined;

/**
 * @member {Date} toDate
 */
GetHolidaysResponse.prototype['toDate'] = undefined;

/**
 * @member {Date} repaymentsRescheduledTo
 */
GetHolidaysResponse.prototype['repaymentsRescheduledTo'] = undefined;

/**
 * @member {Number} officeId
 */
GetHolidaysResponse.prototype['officeId'] = undefined;

/**
 * @member {module:model/EnumOptionData} status
 */
GetHolidaysResponse.prototype['status'] = undefined;






export default GetHolidaysResponse;

