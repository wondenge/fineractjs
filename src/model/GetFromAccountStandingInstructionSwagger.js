

import ApiClient from '../ApiClient';

/**
 * The GetFromAccountStandingInstructionSwagger model module.
 * @module model/GetFromAccountStandingInstructionSwagger
 * @version 1.0
 */
class GetFromAccountStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetFromAccountStandingInstructionSwagger</code>.
     * @alias module:model/GetFromAccountStandingInstructionSwagger
     */
    constructor() { 
        
        GetFromAccountStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFromAccountStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFromAccountStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetFromAccountStandingInstructionSwagger} The populated <code>GetFromAccountStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFromAccountStandingInstructionSwagger();

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
GetFromAccountStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetFromAccountStandingInstructionSwagger.prototype['accountNo'] = undefined;

/**
 * @member {Number} productId
 */
GetFromAccountStandingInstructionSwagger.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetFromAccountStandingInstructionSwagger.prototype['productName'] = undefined;






export default GetFromAccountStandingInstructionSwagger;

