

import ApiClient from '../ApiClient';

/**
 * The GetRecurrenceFrequencyStandingInstructionSwagger model module.
 * @module model/GetRecurrenceFrequencyStandingInstructionSwagger
 * @version 1.0
 */
class GetRecurrenceFrequencyStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetRecurrenceFrequencyStandingInstructionSwagger</code>.
     * @alias module:model/GetRecurrenceFrequencyStandingInstructionSwagger
     */
    constructor() { 
        
        GetRecurrenceFrequencyStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurrenceFrequencyStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurrenceFrequencyStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetRecurrenceFrequencyStandingInstructionSwagger} The populated <code>GetRecurrenceFrequencyStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurrenceFrequencyStandingInstructionSwagger();

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
GetRecurrenceFrequencyStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurrenceFrequencyStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurrenceFrequencyStandingInstructionSwagger.prototype['description'] = undefined;






export default GetRecurrenceFrequencyStandingInstructionSwagger;

