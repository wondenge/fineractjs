

import ApiClient from '../ApiClient';

/**
 * The PutHolidaysHolidayIdResponseChanges model module.
 * @module model/PutHolidaysHolidayIdResponseChanges
 * @version 1.0
 */
class PutHolidaysHolidayIdResponseChanges {
    /**
     * Constructs a new <code>PutHolidaysHolidayIdResponseChanges</code>.
     * @alias module:model/PutHolidaysHolidayIdResponseChanges
     */
    constructor() { 
        
        PutHolidaysHolidayIdResponseChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutHolidaysHolidayIdResponseChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutHolidaysHolidayIdResponseChanges} obj Optional instance to populate.
     * @return {module:model/PutHolidaysHolidayIdResponseChanges} The populated <code>PutHolidaysHolidayIdResponseChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutHolidaysHolidayIdResponseChanges();

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
PutHolidaysHolidayIdResponseChanges.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PutHolidaysHolidayIdResponseChanges.prototype['description'] = undefined;






export default PutHolidaysHolidayIdResponseChanges;

