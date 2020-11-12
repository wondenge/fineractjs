

import ApiClient from '../ApiClient';

/**
 * The GetStatusStandingInstructionSwagger model module.
 * @module model/GetStatusStandingInstructionSwagger
 * @version 1.0
 */
class GetStatusStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetStatusStandingInstructionSwagger</code>.
     * @alias module:model/GetStatusStandingInstructionSwagger
     */
    constructor() { 
        
        GetStatusStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStatusStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStatusStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetStatusStandingInstructionSwagger} The populated <code>GetStatusStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStatusStandingInstructionSwagger();

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
GetStatusStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetStatusStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetStatusStandingInstructionSwagger.prototype['description'] = undefined;






export default GetStatusStandingInstructionSwagger;

