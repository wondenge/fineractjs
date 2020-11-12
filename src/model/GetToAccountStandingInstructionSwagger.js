

import ApiClient from '../ApiClient';

/**
 * The GetToAccountStandingInstructionSwagger model module.
 * @module model/GetToAccountStandingInstructionSwagger
 * @version 1.0
 */
class GetToAccountStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetToAccountStandingInstructionSwagger</code>.
     * @alias module:model/GetToAccountStandingInstructionSwagger
     */
    constructor() { 
        
        GetToAccountStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetToAccountStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetToAccountStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetToAccountStandingInstructionSwagger} The populated <code>GetToAccountStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetToAccountStandingInstructionSwagger();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetToAccountStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetToAccountStandingInstructionSwagger.prototype['accountNo'] = undefined;

/**
 * @member {Number} productId
 */
GetToAccountStandingInstructionSwagger.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetToAccountStandingInstructionSwagger.prototype['productName'] = undefined;






export default GetToAccountStandingInstructionSwagger;

