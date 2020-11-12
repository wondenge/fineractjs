

import ApiClient from '../ApiClient';

/**
 * The GetLoanCharge model module.
 * @module model/GetLoanCharge
 * @version 1.0
 */
class GetLoanCharge {
    /**
     * Constructs a new <code>GetLoanCharge</code>.
     * @alias module:model/GetLoanCharge
     */
    constructor() { 
        
        GetLoanCharge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanCharge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanCharge} obj Optional instance to populate.
     * @return {module:model/GetLoanCharge} The populated <code>GetLoanCharge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanCharge();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanCharge.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanCharge.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetLoanCharge.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetLoanCharge.prototype['penalty'] = undefined;






export default GetLoanCharge;

