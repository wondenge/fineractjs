

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsPeriodTypes model module.
 * @module model/GetFixedDepositAccountsPeriodTypes
 * @version 1.0
 */
class GetFixedDepositAccountsPeriodTypes {
    /**
     * Constructs a new <code>GetFixedDepositAccountsPeriodTypes</code>.
     * @alias module:model/GetFixedDepositAccountsPeriodTypes
     */
    constructor() { 
        
        GetFixedDepositAccountsPeriodTypes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsPeriodTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsPeriodTypes} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsPeriodTypes} The populated <code>GetFixedDepositAccountsPeriodTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsPeriodTypes();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFixedDepositAccountsPeriodTypes.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositAccountsPeriodTypes.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositAccountsPeriodTypes.prototype['description'] = undefined;






export default GetFixedDepositAccountsPeriodTypes;

