

import ApiClient from '../ApiClient';

/**
 * The DeleteHolidaysHolidayIdResponse model module.
 * @module model/DeleteHolidaysHolidayIdResponse
 * @version 1.0
 */
class DeleteHolidaysHolidayIdResponse {
    /**
     * Constructs a new <code>DeleteHolidaysHolidayIdResponse</code>.
     * DeleteHolidaysHolidayIdResponse
     * @alias module:model/DeleteHolidaysHolidayIdResponse
     */
    constructor() { 
        
        DeleteHolidaysHolidayIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteHolidaysHolidayIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteHolidaysHolidayIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteHolidaysHolidayIdResponse} The populated <code>DeleteHolidaysHolidayIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteHolidaysHolidayIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteHolidaysHolidayIdResponse.prototype['resourceId'] = undefined;






export default DeleteHolidaysHolidayIdResponse;

