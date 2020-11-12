

import ApiClient from '../ApiClient';

/**
 * The GetFromAccountTypeOptionsResponseStandingInstructionSwagger model module.
 * @module model/GetFromAccountTypeOptionsResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetFromAccountTypeOptionsResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetFromAccountTypeOptionsResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetFromAccountTypeOptionsResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetFromAccountTypeOptionsResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFromAccountTypeOptionsResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFromAccountTypeOptionsResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetFromAccountTypeOptionsResponseStandingInstructionSwagger} The populated <code>GetFromAccountTypeOptionsResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFromAccountTypeOptionsResponseStandingInstructionSwagger();

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
GetFromAccountTypeOptionsResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFromAccountTypeOptionsResponseStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFromAccountTypeOptionsResponseStandingInstructionSwagger.prototype['description'] = undefined;






export default GetFromAccountTypeOptionsResponseStandingInstructionSwagger;

