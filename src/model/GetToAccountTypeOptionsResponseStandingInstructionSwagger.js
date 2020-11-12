

import ApiClient from '../ApiClient';

/**
 * The GetToAccountTypeOptionsResponseStandingInstructionSwagger model module.
 * @module model/GetToAccountTypeOptionsResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetToAccountTypeOptionsResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetToAccountTypeOptionsResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetToAccountTypeOptionsResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetToAccountTypeOptionsResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetToAccountTypeOptionsResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetToAccountTypeOptionsResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetToAccountTypeOptionsResponseStandingInstructionSwagger} The populated <code>GetToAccountTypeOptionsResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetToAccountTypeOptionsResponseStandingInstructionSwagger();

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
GetToAccountTypeOptionsResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetToAccountTypeOptionsResponseStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetToAccountTypeOptionsResponseStandingInstructionSwagger.prototype['description'] = undefined;






export default GetToAccountTypeOptionsResponseStandingInstructionSwagger;

