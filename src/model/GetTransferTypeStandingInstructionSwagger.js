

import ApiClient from '../ApiClient';

/**
 * The GetTransferTypeStandingInstructionSwagger model module.
 * @module model/GetTransferTypeStandingInstructionSwagger
 * @version 1.0
 */
class GetTransferTypeStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetTransferTypeStandingInstructionSwagger</code>.
     * @alias module:model/GetTransferTypeStandingInstructionSwagger
     */
    constructor() { 
        
        GetTransferTypeStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTransferTypeStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransferTypeStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetTransferTypeStandingInstructionSwagger} The populated <code>GetTransferTypeStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransferTypeStandingInstructionSwagger();

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
GetTransferTypeStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetTransferTypeStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetTransferTypeStandingInstructionSwagger.prototype['description'] = undefined;






export default GetTransferTypeStandingInstructionSwagger;

