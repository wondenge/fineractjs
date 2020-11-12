

import ApiClient from '../ApiClient';

/**
 * The GetFromAccountTypeResponseStandingInstructionSwagger model module.
 * @module model/GetFromAccountTypeResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetFromAccountTypeResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetFromAccountTypeResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetFromAccountTypeResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetFromAccountTypeResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFromAccountTypeResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFromAccountTypeResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetFromAccountTypeResponseStandingInstructionSwagger} The populated <code>GetFromAccountTypeResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFromAccountTypeResponseStandingInstructionSwagger();

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
GetFromAccountTypeResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFromAccountTypeResponseStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFromAccountTypeResponseStandingInstructionSwagger.prototype['description'] = undefined;






export default GetFromAccountTypeResponseStandingInstructionSwagger;

