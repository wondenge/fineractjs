

import ApiClient from '../ApiClient';
import PutHolidaysHolidayIdResponseChanges from './PutHolidaysHolidayIdResponseChanges';

/**
 * The PutHolidaysHolidayIdResponse model module.
 * @module model/PutHolidaysHolidayIdResponse
 * @version 1.0
 */
class PutHolidaysHolidayIdResponse {
    /**
     * Constructs a new <code>PutHolidaysHolidayIdResponse</code>.
     * PutHolidaysHolidayIdResponse
     * @alias module:model/PutHolidaysHolidayIdResponse
     */
    constructor() { 
        
        PutHolidaysHolidayIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutHolidaysHolidayIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutHolidaysHolidayIdResponse} obj Optional instance to populate.
     * @return {module:model/PutHolidaysHolidayIdResponse} The populated <code>PutHolidaysHolidayIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutHolidaysHolidayIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutHolidaysHolidayIdResponseChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutHolidaysHolidayIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutHolidaysHolidayIdResponseChanges} changes
 */
PutHolidaysHolidayIdResponse.prototype['changes'] = undefined;






export default PutHolidaysHolidayIdResponse;

