

import ApiClient from '../ApiClient';

/**
 * The OfficeData model module.
 * @module model/OfficeData
 * @version 1.0
 */
class OfficeData {
    /**
     * Constructs a new <code>OfficeData</code>.
     * @alias module:model/OfficeData
     */
    constructor() { 
        
        OfficeData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OfficeData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OfficeData} obj Optional instance to populate.
     * @return {module:model/OfficeData} The populated <code>OfficeData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OfficeData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('openingDate')) {
                obj['openingDate'] = ApiClient.convertToType(data['openingDate'], 'Date');
            }
            if (data.hasOwnProperty('hierarchy')) {
                obj['hierarchy'] = ApiClient.convertToType(data['hierarchy'], 'String');
            }
            if (data.hasOwnProperty('rowIndex')) {
                obj['rowIndex'] = ApiClient.convertToType(data['rowIndex'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
OfficeData.prototype['id'] = undefined;

/**
 * @member {Date} openingDate
 */
OfficeData.prototype['openingDate'] = undefined;

/**
 * @member {String} hierarchy
 */
OfficeData.prototype['hierarchy'] = undefined;

/**
 * @member {Number} rowIndex
 */
OfficeData.prototype['rowIndex'] = undefined;






export default OfficeData;

