

import ApiClient from '../ApiClient';

/**
 * The GetInstructionTypeOptionsResponseStandingInstructionSwagger model module.
 * @module model/GetInstructionTypeOptionsResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetInstructionTypeOptionsResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetInstructionTypeOptionsResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetInstructionTypeOptionsResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetInstructionTypeOptionsResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInstructionTypeOptionsResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInstructionTypeOptionsResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetInstructionTypeOptionsResponseStandingInstructionSwagger} The populated <code>GetInstructionTypeOptionsResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInstructionTypeOptionsResponseStandingInstructionSwagger();

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
GetInstructionTypeOptionsResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetInstructionTypeOptionsResponseStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetInstructionTypeOptionsResponseStandingInstructionSwagger.prototype['description'] = undefined;






export default GetInstructionTypeOptionsResponseStandingInstructionSwagger;

