

import ApiClient from '../ApiClient';

/**
 * The GetSelfLoansChargeTimeType model module.
 * @module model/GetSelfLoansChargeTimeType
 * @version 1.0
 */
class GetSelfLoansChargeTimeType {
    /**
     * Constructs a new <code>GetSelfLoansChargeTimeType</code>.
     * @alias module:model/GetSelfLoansChargeTimeType
     */
    constructor() { 
        
        GetSelfLoansChargeTimeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfLoansChargeTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfLoansChargeTimeType} obj Optional instance to populate.
     * @return {module:model/GetSelfLoansChargeTimeType} The populated <code>GetSelfLoansChargeTimeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfLoansChargeTimeType();

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
GetSelfLoansChargeTimeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfLoansChargeTimeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfLoansChargeTimeType.prototype['description'] = undefined;






export default GetSelfLoansChargeTimeType;

