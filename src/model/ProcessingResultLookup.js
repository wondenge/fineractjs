

import ApiClient from '../ApiClient';

/**
 * The ProcessingResultLookup model module.
 * @module model/ProcessingResultLookup
 * @version 1.0
 */
class ProcessingResultLookup {
    /**
     * Constructs a new <code>ProcessingResultLookup</code>.
     * @alias module:model/ProcessingResultLookup
     */
    constructor() { 
        
        ProcessingResultLookup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProcessingResultLookup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessingResultLookup} obj Optional instance to populate.
     * @return {module:model/ProcessingResultLookup} The populated <code>ProcessingResultLookup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProcessingResultLookup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('processingResult')) {
                obj['processingResult'] = ApiClient.convertToType(data['processingResult'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ProcessingResultLookup.prototype['id'] = undefined;

/**
 * @member {String} processingResult
 */
ProcessingResultLookup.prototype['processingResult'] = undefined;






export default ProcessingResultLookup;

