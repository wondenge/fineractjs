

import ApiClient from '../ApiClient';

/**
 * The GetLoanChargeTimeType model module.
 * @module model/GetLoanChargeTimeType
 * @version 1.0
 */
class GetLoanChargeTimeType {
    /**
     * Constructs a new <code>GetLoanChargeTimeType</code>.
     * @alias module:model/GetLoanChargeTimeType
     */
    constructor() { 
        
        GetLoanChargeTimeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanChargeTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanChargeTimeType} obj Optional instance to populate.
     * @return {module:model/GetLoanChargeTimeType} The populated <code>GetLoanChargeTimeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanChargeTimeType();

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
GetLoanChargeTimeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanChargeTimeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanChargeTimeType.prototype['description'] = undefined;






export default GetLoanChargeTimeType;

