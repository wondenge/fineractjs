

import ApiClient from '../ApiClient';

/**
 * The PutHolidaysHolidayIdRequest model module.
 * @module model/PutHolidaysHolidayIdRequest
 * @version 1.0
 */
class PutHolidaysHolidayIdRequest {
    /**
     * Constructs a new <code>PutHolidaysHolidayIdRequest</code>.
     * PutHolidaysHolidayIdRequest
     * @alias module:model/PutHolidaysHolidayIdRequest
     */
    constructor() { 
        
        PutHolidaysHolidayIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutHolidaysHolidayIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutHolidaysHolidayIdRequest} obj Optional instance to populate.
     * @return {module:model/PutHolidaysHolidayIdRequest} The populated <code>PutHolidaysHolidayIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutHolidaysHolidayIdRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutHolidaysHolidayIdRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PutHolidaysHolidayIdRequest.prototype['description'] = undefined;






export default PutHolidaysHolidayIdRequest;

