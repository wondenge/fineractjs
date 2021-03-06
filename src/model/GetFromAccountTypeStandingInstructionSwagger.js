

import ApiClient from '../ApiClient';

/**
 * The GetFromAccountTypeStandingInstructionSwagger model module.
 * @module model/GetFromAccountTypeStandingInstructionSwagger
 * @version 1.0
 */
class GetFromAccountTypeStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetFromAccountTypeStandingInstructionSwagger</code>.
     * @alias module:model/GetFromAccountTypeStandingInstructionSwagger
     */
    constructor() { 
        
        GetFromAccountTypeStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFromAccountTypeStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFromAccountTypeStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetFromAccountTypeStandingInstructionSwagger} The populated <code>GetFromAccountTypeStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFromAccountTypeStandingInstructionSwagger();

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
GetFromAccountTypeStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFromAccountTypeStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFromAccountTypeStandingInstructionSwagger.prototype['description'] = undefined;






export default GetFromAccountTypeStandingInstructionSwagger;

